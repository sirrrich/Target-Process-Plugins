﻿using System.Linq.Expressions;

namespace Tp.Core.Linq
{
	public interface ISurrogateMethod
	{
		string Name { get; }
		Expression GetMethodExpression(Expression expression);
	}

	public class TodaySurrogate : ISurrogateMethod
	{
		public string Name
		{
			get { return "Today"; }
		}

		public Expression GetMethodExpression(Expression expression)
		{
			return Expression.Constant(CurrentDate.Value);
		}
	}
}
