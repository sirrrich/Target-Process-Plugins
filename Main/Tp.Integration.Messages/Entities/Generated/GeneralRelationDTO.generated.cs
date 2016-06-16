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
	public partial interface IGeneralRelationDTO : IDataTransferObject
	{
		int? SlaveID { get; set; }
		string SlaveName { get; set; }
		int? MasterID { get; set; }
		string MasterName { get; set; }
		int? RelationTypeID { get; set; }
		int? GeneralRelationTypeID { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class GeneralRelationDTO : DataTransferObject, IGeneralRelationDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return GeneralRelationID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				GeneralRelationID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=1)]
		public Int32? GeneralRelationID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=2)]
		public int? MasterID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=3)]
		public int? SlaveID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=4)]
		public int? GeneralRelationTypeID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=5)]
		public string SlaveName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=6)]
		public string MasterName { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=7)]
		public int? RelationTypeID { get; set; }
	}

	public enum GeneralRelationField
	{
		MasterID,
		SlaveID,
		GeneralRelationTypeID,
		SlaveName,
		MasterName,
		RelationTypeID,
	}
}