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
	public partial interface ITaskDTO : IAssignableDTO
	{
		int? UserStoryID { get; set; }
		string UserStoryName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class TaskDTO : DataTransferObject, ITaskDTO, ICustomFieldHolderDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return TaskID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				TaskID = value;
			}
		}
		
		[DataMember]
		[XmlElement(Order=1)]
		public string CommentOnChangingState { get; set; }

		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? TaskID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String Name { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public string Description { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public DateTime? StartDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=7)]
		public DateTime? EndDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=8)]
		public DateTime? CreateDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=9)]
		public DateTime? ModifyDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=10)]
		public DateTime? LastCommentDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=11)]
		public Double? NumericPriority { get; set; }

		
		[DataMember]
		[XmlElement(Order=12)]
		public String CustomField1 { get; set; }

		
		[DataMember]
		[XmlElement(Order=13)]
		public String CustomField2 { get; set; }

		
		[DataMember]
		[XmlElement(Order=14)]
		public String CustomField3 { get; set; }

		
		[DataMember]
		[XmlElement(Order=15)]
		public String CustomField4 { get; set; }

		
		[DataMember]
		[XmlElement(Order=16)]
		public String CustomField5 { get; set; }

		
		[DataMember]
		[XmlElement(Order=17)]
		public String CustomField6 { get; set; }

		
		[DataMember]
		[XmlElement(Order=18)]
		public String CustomField7 { get; set; }

		
		[DataMember]
		[XmlElement(Order=19)]
		public String CustomField8 { get; set; }

		
		[DataMember]
		[XmlElement(Order=20)]
		public String CustomField9 { get; set; }

		
		[DataMember]
		[XmlElement(Order=21)]
		public String CustomField10 { get; set; }

		
		[DataMember]
		[XmlElement(Order=22)]
		public String CustomField11 { get; set; }

		
		[DataMember]
		[XmlElement(Order=23)]
		public String CustomField12 { get; set; }

		
		[DataMember]
		[XmlElement(Order=24)]
		public String CustomField13 { get; set; }

		
		[DataMember]
		[XmlElement(Order=25)]
		public String CustomField14 { get; set; }

		
		[DataMember]
		[XmlElement(Order=26)]
		public String CustomField15 { get; set; }

		
		[DataMember]
		[XmlElement(Order=27)]
		public String CustomField16 { get; set; }

		
		[DataMember]
		[XmlElement(Order=28)]
		public String CustomField17 { get; set; }

		
		[DataMember]
		[XmlElement(Order=29)]
		public String CustomField18 { get; set; }

		
		[DataMember]
		[XmlElement(Order=30)]
		public String CustomField19 { get; set; }

		
		[DataMember]
		[XmlElement(Order=31)]
		public String CustomField20 { get; set; }

		
		[DataMember]
		[XmlElement(Order=32)]
		public String CustomField21 { get; set; }

		
		[DataMember]
		[XmlElement(Order=33)]
		public String CustomField22 { get; set; }

		
		[DataMember]
		[XmlElement(Order=34)]
		public String CustomField23 { get; set; }

		
		[DataMember]
		[XmlElement(Order=35)]
		public String CustomField24 { get; set; }

		
		[DataMember]
		[XmlElement(Order=36)]
		public String CustomField25 { get; set; }

		
		[DataMember]
		[XmlElement(Order=37)]
		public String CustomField26 { get; set; }

		
		[DataMember]
		[XmlElement(Order=38)]
		public String CustomField27 { get; set; }

		
		[DataMember]
		[XmlElement(Order=39)]
		public String CustomField28 { get; set; }

		
		[DataMember]
		[XmlElement(Order=40)]
		public String CustomField29 { get; set; }

		
		[DataMember]
		[XmlElement(Order=41)]
		public String CustomField30 { get; set; }

		
		[DataMember]
		[XmlElement(Order=42)]
		public String CustomField31 { get; set; }

		
		[DataMember]
		[XmlElement(Order=43)]
		public String CustomField32 { get; set; }

		
		[DataMember]
		[XmlElement(Order=44)]
		public String CustomField33 { get; set; }

		
		[DataMember]
		[XmlElement(Order=45)]
		public String CustomField34 { get; set; }

		
		[DataMember]
		[XmlElement(Order=46)]
		public String CustomField35 { get; set; }

		
		[DataMember]
		[XmlElement(Order=47)]
		public String CustomField36 { get; set; }

		
		[DataMember]
		[XmlElement(Order=48)]
		public String CustomField37 { get; set; }

		
		[DataMember]
		[XmlElement(Order=49)]
		public String CustomField38 { get; set; }

		
		[DataMember]
		[XmlElement(Order=50)]
		public String CustomField39 { get; set; }

		
		[DataMember]
		[XmlElement(Order=51)]
		public String CustomField40 { get; set; }

		
		[DataMember]
		[XmlElement(Order=52)]
		public String CustomField41 { get; set; }

		
		[DataMember]
		[XmlElement(Order=53)]
		public String CustomField42 { get; set; }

		
		[DataMember]
		[XmlElement(Order=54)]
		public String CustomField43 { get; set; }

		
		[DataMember]
		[XmlElement(Order=55)]
		public String CustomField44 { get; set; }

		
		[DataMember]
		[XmlElement(Order=56)]
		public String CustomField45 { get; set; }

		
		[DataMember]
		[XmlElement(Order=57)]
		public String CustomField46 { get; set; }

		
		[DataMember]
		[XmlElement(Order=58)]
		public String CustomField47 { get; set; }

		
		[DataMember]
		[XmlElement(Order=59)]
		public String CustomField48 { get; set; }

		
		[DataMember]
		[XmlElement(Order=60)]
		public String CustomField49 { get; set; }

		
		[DataMember]
		[XmlElement(Order=61)]
		public String CustomField50 { get; set; }

		
		[DataMember]
		[XmlElement(Order=62)]
		public String CustomField51 { get; set; }

		
		[DataMember]
		[XmlElement(Order=63)]
		public String CustomField52 { get; set; }

		
		[DataMember]
		[XmlElement(Order=64)]
		public String CustomField53 { get; set; }

		
		[DataMember]
		[XmlElement(Order=65)]
		public String CustomField54 { get; set; }

		
		[DataMember]
		[XmlElement(Order=66)]
		public String CustomField55 { get; set; }

		
		[DataMember]
		[XmlElement(Order=67)]
		public String CustomField56 { get; set; }

		
		[DataMember]
		[XmlElement(Order=68)]
		public String CustomField57 { get; set; }

		
		[DataMember]
		[XmlElement(Order=69)]
		public String CustomField58 { get; set; }

		
		[DataMember]
		[XmlElement(Order=70)]
		public String CustomField59 { get; set; }

		
		[DataMember]
		[XmlElement(Order=71)]
		public String CustomField60 { get; set; }

		
		[DataMember]
		[XmlElement(Order=72)]
		public Decimal? Effort { get; set; }

		
		[DataMember]
		[XmlElement(Order=73)]
		public Decimal? EffortCompleted { get; set; }

		
		[DataMember]
		[XmlElement(Order=74)]
		public Decimal? EffortToDo { get; set; }

		
		[DataMember]
		[XmlElement(Order=75)]
		public Decimal? TimeSpent { get; set; }

		
		[DataMember]
		[XmlElement(Order=76)]
		public Decimal? TimeRemain { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=77)]
		public int? LastCommentUserID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=78)]
		public int? OwnerID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=79)]
		public int? LastEditorID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=80)]
		public int? EntityStateID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=81)]
		public int? PriorityID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=82)]
		public int? ProjectID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=83)]
		public int? IterationID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=84)]
		public int? ParentID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=85)]
		public int? ReleaseID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=86)]
		public int? UserStoryID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=87)]
		public string EntityTypeName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=88)]
		public string EntityStateName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=89)]
		public string PriorityName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=90)]
		public string ProjectName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=91)]
		public string IterationName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=92)]
		public string ParentName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=93)]
		public string ReleaseName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=94)]
		public string UserStoryName { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=95)]
		public int? EntityTypeID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=96)]
		public int? SquadID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=97)]
		public string SquadName { get; set; }

		
		[DataMember]
		[XmlElement(Order=98)]
		public Field[] CustomFieldsMetaInfo { get; set; }

		
		[DataMember]
		[XmlElement(Order=99)]
		public DateTime? PlannedStartDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=100)]
		public DateTime? PlannedEndDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=101)]
		public Decimal? Progress { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=102)]
		public int? SquadIterationID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=103)]
		public string SquadIterationName { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=105)]
		public int? ResponsibleSquadID { get; set; }

		[XmlIgnore]
		int? IGeneralNumericPriorityListItemDTO.ParentProjectID
		{
			get { return ProjectID; }
			set { ProjectID = value; }
		}

		[XmlIgnore]
		string IGeneralDTO.ParentProjectName
		{
			get { return ProjectName; }
			set { ProjectName = value; }
		}
	}

	public enum TaskField
	{
		CommentOnChangingState,
		Name,
		Description,
		StartDate,
		EndDate,
		CreateDate,
		ModifyDate,
		LastCommentDate,
		NumericPriority,
		CustomField1,
		CustomField2,
		CustomField3,
		CustomField4,
		CustomField5,
		CustomField6,
		CustomField7,
		CustomField8,
		CustomField9,
		CustomField10,
		CustomField11,
		CustomField12,
		CustomField13,
		CustomField14,
		CustomField15,
		CustomField16,
		CustomField17,
		CustomField18,
		CustomField19,
		CustomField20,
		CustomField21,
		CustomField22,
		CustomField23,
		CustomField24,
		CustomField25,
		CustomField26,
		CustomField27,
		CustomField28,
		CustomField29,
		CustomField30,
		CustomField31,
		CustomField32,
		CustomField33,
		CustomField34,
		CustomField35,
		CustomField36,
		CustomField37,
		CustomField38,
		CustomField39,
		CustomField40,
		CustomField41,
		CustomField42,
		CustomField43,
		CustomField44,
		CustomField45,
		CustomField46,
		CustomField47,
		CustomField48,
		CustomField49,
		CustomField50,
		CustomField51,
		CustomField52,
		CustomField53,
		CustomField54,
		CustomField55,
		CustomField56,
		CustomField57,
		CustomField58,
		CustomField59,
		CustomField60,
		Effort,
		EffortCompleted,
		EffortToDo,
		TimeSpent,
		TimeRemain,
		LastCommentUserID,
		OwnerID,
		LastEditorID,
		EntityStateID,
		PriorityID,
		ProjectID,
		IterationID,
		ParentID,
		ReleaseID,
		UserStoryID,
		EntityTypeName,
		EntityStateName,
		PriorityName,
		ProjectName,
		IterationName,
		ParentName,
		ReleaseName,
		UserStoryName,
		EntityTypeID,
		SquadID,
		SquadName,
		CustomFieldsMetaInfo,
		PlannedStartDate,
		PlannedEndDate,
		Progress,
		SquadIterationID,
		SquadIterationName,
		ResponsibleSquadID,
		ParentProjectID,
		ParentProjectName,
	}
}
