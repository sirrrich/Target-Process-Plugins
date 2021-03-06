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
	public partial interface IRoleDTO : IDataTransferObject
	{
		String Name { get; set; }
		String Description { get; set; }
		Boolean? TimeSheetAccess { get; set; }
		Boolean? PeopleAccess { get; set; }
		Boolean? PersonalEmailAccess { get; set; }
		Boolean? CanChangeOwner { get; set; }
		Boolean? HaveEffort { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class RoleDTO : DataTransferObject, IRoleDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return RoleID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				RoleID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? RoleID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String Name { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public String Description { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public Boolean? TimeSheetAccess { get; set; }

		
		[DataMember]
		[XmlElement(Order=7)]
		public Boolean? PeopleAccess { get; set; }

		
		[DataMember]
		[XmlElement(Order=8)]
		public Boolean? PersonalEmailAccess { get; set; }

		
		[DataMember]
		[XmlElement(Order=10)]
		public Boolean? HaveEffort { get; set; }

		
		[DataMember]
		[XmlElement(Order=11)]
		public Boolean? CanChangeOwner { get; set; }
	}

	public enum RoleField
	{
		Name,
		Description,
		TimeSheetAccess,
		PeopleAccess,
		PersonalEmailAccess,
		HaveEffort,
		CanChangeOwner,
	}
}
