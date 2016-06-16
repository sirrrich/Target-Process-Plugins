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
	public partial interface IRoleEntityTypeDTO : IDataTransferObject
	{
		Boolean? IsDeleteEnabled { get; set; }
		Boolean? IsEditEnabled { get; set; }
		int? EntityTypeID { get; set; }
		string EntityTypeName { get; set; }
		int? RoleID { get; set; }
		string RoleName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class RoleEntityTypeDTO : DataTransferObject, IRoleEntityTypeDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return RoleEntityTypeID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				RoleEntityTypeID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? RoleEntityTypeID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public Boolean? IsDeleteEnabled { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public Boolean? IsEditEnabled { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=6)]
		public int? RoleID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=7)]
		public string EntityTypeName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=8)]
		public string RoleName { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=9)]
		public int? EntityTypeID { get; set; }
	}

	public enum RoleEntityTypeField
	{
		IsDeleteEnabled,
		IsEditEnabled,
		RoleID,
		EntityTypeName,
		RoleName,
		EntityTypeID,
	}
}