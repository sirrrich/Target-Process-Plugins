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
	public partial interface IProjectMemberDTO : IDataTransferObject
	{
		Decimal? WeeklyAvailableHours { get; set; }
		DateTime? MembershipStartDate { get; set; }
		DateTime? MembershipEndDate { get; set; }
		Boolean? IsMembershipStartDateLinked { get; set; }
		Boolean? IsMembershipEndDateLinked { get; set; }
		Int32? Allocation { get; set; }
		int? ProjectID { get; set; }
		string ProjectName { get; set; }
		int? UserID { get; set; }
		int? RoleID { get; set; }
		string RoleName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class ProjectMemberDTO : DataTransferObject, IProjectMemberDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return ProjectMemberID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				ProjectMemberID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? ProjectMemberID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public Decimal? WeeklyAvailableHours { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public DateTime? MembershipEndDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public Int32? Allocation { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=7)]
		public int? ProjectID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=8)]
		public int? UserID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=9)]
		public int? RoleID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=10)]
		public string ProjectName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=11)]
		public string RoleName { get; set; }

		
		[DataMember]
		[XmlElement(Order=12)]
		public DateTime? MembershipStartDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=13)]
		public Boolean? IsMembershipStartDateLinked { get; set; }

		
		[DataMember]
		[XmlElement(Order=14)]
		public Boolean? IsMembershipEndDateLinked { get; set; }
	}

	public enum ProjectMemberField
	{
		WeeklyAvailableHours,
		MembershipEndDate,
		Allocation,
		ProjectID,
		UserID,
		RoleID,
		ProjectName,
		RoleName,
		MembershipStartDate,
		IsMembershipStartDateLinked,
		IsMembershipEndDateLinked,
	}
}
