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
	public partial interface IEntityTypeDTO : IDataTransferObject
	{
		String Name { get; set; }
		String Abbreviation { get; set; }
		Boolean? IsAssignable { get; set; }
		Boolean? IsOwnEffortAvailable { get; set; }
		Boolean? IsGlobalSearchAvailable { get; set; }
		Boolean? IsReleasePlannable { get; set; }
		Boolean? IsIterationPlannable { get; set; }
		CustomFieldScopeEnum? CustomFieldScope { get; set; }
		Boolean? IsChildsContainer { get; set; }
		Boolean? IsPrioritizable { get; set; }
		Boolean? HasAuditHistory { get; set; }
		Boolean? UnitInHourOnly { get; set; }
		Boolean? HasInitialEstimate { get; set; }
		int? PracticeID { get; set; }
		string PracticeName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class EntityTypeDTO : DataTransferObject, IEntityTypeDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return EntityTypeID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				EntityTypeID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? EntityTypeID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String Name { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public String Abbreviation { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public Boolean? IsAssignable { get; set; }

		
		[DataMember]
		[XmlElement(Order=7)]
		public Boolean? IsOwnEffortAvailable { get; set; }

		
		[DataMember]
		[XmlElement(Order=8)]
		public Boolean? IsGlobalSearchAvailable { get; set; }

		
		[DataMember]
		[XmlElement(Order=9)]
		public Boolean? IsReleasePlannable { get; set; }

		
		[DataMember]
		[XmlElement(Order=10)]
		public Boolean? IsIterationPlannable { get; set; }

		
		[DataMember]
		[XmlElement(Order=11)]
		public CustomFieldScopeEnum? CustomFieldScope { get; set; }

		
		[DataMember]
		[XmlElement(Order=12)]
		public Boolean? IsChildsContainer { get; set; }

		
		[DataMember]
		[XmlElement(Order=13)]
		public Boolean? IsPrioritizable { get; set; }

		
		[DataMember]
		[XmlElement(Order=14)]
		public Boolean? HasAuditHistory { get; set; }

		
		[DataMember]
		[XmlElement(Order=15)]
		public Boolean? UnitInHourOnly { get; set; }

		
		[DataMember]
		[XmlElement(Order=16)]
		public Boolean? HasInitialEstimate { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=17)]
		public int? PracticeID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=18)]
		public string PracticeName { get; set; }
	}

	public enum EntityTypeField
	{
		Name,
		Abbreviation,
		IsAssignable,
		IsOwnEffortAvailable,
		IsGlobalSearchAvailable,
		IsReleasePlannable,
		IsIterationPlannable,
		CustomFieldScope,
		IsChildsContainer,
		IsPrioritizable,
		HasAuditHistory,
		UnitInHourOnly,
		HasInitialEstimate,
		PracticeID,
		PracticeName,
	}
}
