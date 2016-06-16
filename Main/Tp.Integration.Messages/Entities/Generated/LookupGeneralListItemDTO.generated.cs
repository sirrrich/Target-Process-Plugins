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
	public partial interface ILookupGeneralListItemDTO : IDataTransferObject
	{
		String Name { get; set; }
		Int32? ParentProjectID { get; set; }
		String ProjectName { get; set; }
		String ProjectAbbreviation { get; set; }
		Int32? EntityTypeID { get; set; }
		String EntityTypeAbbreviation { get; set; }
		String Icon { get; set; }
		Boolean? IsTermEntity { get; set; }
		Double? NumericPriority { get; set; }
		DateTime? CreateDate { get; set; }
		DateTime? StartDate { get; set; }
		DateTime? EndDate { get; set; }
		int? IterationID { get; set; }
		string IterationName { get; set; }
		int? ReleaseID { get; set; }
		string ReleaseName { get; set; }
		int? EntityStateID { get; set; }
		string EntityStateName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class LookupGeneralListItemDTO : DataTransferObject, ILookupGeneralListItemDTO
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
		[XmlElement(Order=1)]
		public Int32? GeneralID { get; set; }

		
		[DataMember]
		[XmlElement(Order=2)]
		public String Name { get; set; }

		
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? ParentProjectID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String ProjectName { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public String ProjectAbbreviation { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public Int32? EntityTypeID { get; set; }

		
		[DataMember]
		[XmlElement(Order=7)]
		public String EntityTypeAbbreviation { get; set; }

		
		[DataMember]
		[XmlElement(Order=8)]
		public String Icon { get; set; }

		
		[DataMember]
		[XmlElement(Order=9)]
		public Boolean? IsTermEntity { get; set; }

		
		[DataMember]
		[XmlElement(Order=10)]
		public Double? NumericPriority { get; set; }

		
		[DataMember]
		[XmlElement(Order=11)]
		public DateTime? CreateDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=12)]
		public DateTime? StartDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=13)]
		public DateTime? EndDate { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=14)]
		public int? IterationID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=15)]
		public string IterationName { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=16)]
		public int? ReleaseID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=17)]
		public string ReleaseName { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=18)]
		public int? EntityStateID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=19)]
		public string EntityStateName { get; set; }
	}

	public enum LookupGeneralListItemField
	{
		Name,
		ParentProjectID,
		ProjectName,
		ProjectAbbreviation,
		EntityTypeID,
		EntityTypeAbbreviation,
		Icon,
		IsTermEntity,
		NumericPriority,
		CreateDate,
		StartDate,
		EndDate,
		IterationID,
		IterationName,
		ReleaseID,
		ReleaseName,
		EntityStateID,
		EntityStateName,
	}
}
