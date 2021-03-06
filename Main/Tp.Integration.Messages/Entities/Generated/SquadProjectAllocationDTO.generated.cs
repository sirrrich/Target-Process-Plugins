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
	public partial interface ISquadProjectAllocationDTO : IProjectAllocationDTO
	{
		int? SquadProjectID { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class SquadProjectAllocationDTO : DataTransferObject, ISquadProjectAllocationDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return SquadProjectAllocationID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				SquadProjectAllocationID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=1)]
		public Int32? SquadProjectAllocationID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=2)]
		public int? SquadProjectID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public DateTime? StartDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public DateTime? EndDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public Int32? Percentage { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=7)]
		public int? EntityTypeID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=8)]
		public string EntityTypeName { get; set; }

		
		[DataMember]
		[XmlElement(Order=9)]
		public DateTime? EffectiveStartDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=10)]
		public DateTime? PossibleEffectiveEndDate { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=11)]
		public int? ProjectID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=12)]
		public string ProjectName { get; set; }
	}

	public enum SquadProjectAllocationField
	{
		SquadProjectID,
		StartDate,
		EndDate,
		Percentage,
		EntityTypeID,
		EntityTypeName,
		EffectiveStartDate,
		PossibleEffectiveEndDate,
		ProjectID,
		ProjectName,
	}
}
