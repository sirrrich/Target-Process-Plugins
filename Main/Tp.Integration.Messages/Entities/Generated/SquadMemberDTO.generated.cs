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
	public partial interface ISquadMemberDTO : IDataTransferObject
	{
		DateTime? StartDate { get; set; }
		DateTime? EndDate { get; set; }
		int? SquadID { get; set; }
		string SquadName { get; set; }
		int? UserID { get; set; }
		int? RoleID { get; set; }
		string RoleName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class SquadMemberDTO : DataTransferObject, ISquadMemberDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return SquadMemberID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				SquadMemberID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=1)]
		public Int32? SquadMemberID { get; set; }

		
		[DataMember]
		[XmlElement(Order=2)]
		public DateTime? StartDate { get; set; }

		
		[DataMember]
		[XmlElement(Order=3)]
		public DateTime? EndDate { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=4)]
		public int? SquadID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=5)]
		public string SquadName { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=6)]
		public int? UserID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=7)]
		public int? RoleID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=8)]
		public string RoleName { get; set; }
	}

	public enum SquadMemberField
	{
		StartDate,
		EndDate,
		SquadID,
		SquadName,
		UserID,
		RoleID,
		RoleName,
	}
}
