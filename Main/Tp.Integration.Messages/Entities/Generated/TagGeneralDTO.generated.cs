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
	public partial interface ITagGeneralDTO : IDataTransferObject
	{
		int? GeneralID { get; set; }
		string GeneralName { get; set; }
		int? TagID { get; set; }
		string TagName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class TagGeneralDTO : DataTransferObject, ITagGeneralDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return TagGeneralID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				TagGeneralID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? TagGeneralID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=4)]
		public int? GeneralID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=5)]
		public int? TagID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=6)]
		public string GeneralName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=7)]
		public string TagName { get; set; }
	}

	public enum TagGeneralField
	{
		GeneralID,
		TagID,
		GeneralName,
		TagName,
	}
}
