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
	public partial interface IGeneralListItemDTO : IDataTransferObject
	{
		String Name { get; set; }
		DateTime? CreateDate { get; set; }
		DateTime? StartDate { get; set; }
		DateTime? EndDate { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class GeneralListItemDTO : DataTransferObject, IGeneralListItemDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return GeneralID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				GeneralID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? GeneralID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String Name { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public Int32? ParentProjectID { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public Int32? EntityTypeID { get; set; }

		
		[DataMember]
		[XmlElement(Order=7)]
		public Double? NumericPriority { get; set; }

		
		[DataMember]
		[XmlElement(Order=8)]
		public DateTime? CreateDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=9)]
		public DateTime? StartDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=10)]
		public DateTime? EndDate { get; set; }
	}

	public enum GeneralListItemField
	{
		Name,
		ParentProjectID,
		EntityTypeID,
		NumericPriority,
		CreateDate,
		StartDate,
		EndDate,
	}
}