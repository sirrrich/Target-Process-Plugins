﻿// 
// Copyright (c) 2005-2010 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 
using System;
using StructureMap;
using IContext = Tp.Core.Interfaces.IContext;

namespace Tp.Core
{
	public interface ITimeKeeper
	{
		DateTime Now { get; }
	}

	public class CurrentTimeKeeper : ITimeKeeper
	{
		public DateTime Now
		{
			get { return DateTime.Now; }
		}

		public static readonly ITimeKeeper Instance = new CurrentTimeKeeper();
	}

	class DefiniteTimeKeeper : ITimeKeeper
	{
		private readonly Func<DateTime> _time;

		public DefiniteTimeKeeper(Func<DateTime> time)
		{
			_time = time;
		}

		public DateTime Now
		{
			get { return _time(); }
		}
	}


	/// <summary>
	/// Current date strategy holder.
	/// </summary>
	public static class CurrentDate
	{
		private const string TIME_KEEPER_NAME = "TimeKeeper";

		/// <summary>
		/// Get the current date using the configured strategy.
		/// </summary>
		public static DateTime Value
		{
			get
			{
				var timeKeeper = TimeKeeper;
				return timeKeeper.Now;
			}
		}

		static private ITimeKeeper _timeKeeper = CurrentTimeKeeper.Instance;

		private static ITimeKeeper TimeKeeper
		{
			get
			{
				var context = GetContext();
				if (context == null)
				{
					return _timeKeeper;
				}
				
				if (!context.Contains(TIME_KEEPER_NAME))
				{
					TimeKeeper = CurrentTimeKeeper.Instance;
				}

				return (ITimeKeeper) context.GetValue(TIME_KEEPER_NAME);
			}
			set
			{
				var context = GetContext();
				if (context == null)
				{
					_timeKeeper = value;
				}
				else
					context.SetValue(TIME_KEEPER_NAME, value);
			}
		}

		private static IContext GetContext()
		{
			var context = ObjectFactory.TryGetInstance<IContext>();
			return context;
		}

		/// <summary>
		/// Use the specified delegate to get the current date.
		/// </summary>
		/// <param name="getter">New delegate, or <c>null</c> to reset to the <see cref="DateTime.Now"/>.</param>
		public static IDisposable SetCurrentDateStrategy(Func<DateTime> getter)
		{
			var oldKeeper = TimeKeeper;
			var newKeeper = getter == null ? CurrentTimeKeeper.Instance : new DefiniteTimeKeeper(getter);
			return ScopedAction.New(()=>TimeKeeper=newKeeper, ()=>TimeKeeper=oldKeeper);
		}
	}
}