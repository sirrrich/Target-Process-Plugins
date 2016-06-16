//
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using System.Xml.Serialization;
using System.Runtime.Serialization;
using Tp.Integration.Messages.Entities;
using Tp.Integration.Common;

namespace Tp.Integration.Common
{
	public partial interface ITpEventDTO : IDataTransferObject
	{
		ActionTypeEnum? ActionType { get; set; }
		int? EntityTypeID { get; set; }
		string EntityTypeName { get; set; }
		int? StateID { get; set; }
		string StateName { get; set; }
		int? ProcessID { get; set; }
		string ProcessName { get; set; }
		int? EntityStateID { get; set; }
		string EntityStateName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class TpEventDTO : DataTransferObject, ITpEventDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return TpEventID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				TpEventID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? TpEventID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public ActionTypeEnum? ActionType { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=5)]
		public string EntityTypeName { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=6)]
		public int? EntityStateID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=7)]
		public string StateName { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=8)]
		public int? EntityTypeID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=9)]
		public int? StateID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=10)]
		public int? ProcessID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=11)]
		public string ProcessName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=12)]
		public string EntityStateName { get; set; }
	}

	public enum TpEventField
	{
		ActionType,
		EntityTypeName,
		EntityStateID,
		StateName,
		EntityTypeID,
		StateID,
		ProcessID,
		ProcessName,
		EntityStateName,
	}
}
