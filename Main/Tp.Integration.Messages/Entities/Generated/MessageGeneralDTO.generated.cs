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
	public partial interface IMessageGeneralDTO : IDataTransferObject
	{
		int? MessageID { get; set; }
		int? GeneralID { get; set; }
		string GeneralName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class MessageGeneralDTO : DataTransferObject, IMessageGeneralDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return MessageGeneralID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				MessageGeneralID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? MessageGeneralID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=4)]
		public int? MessageID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=5)]
		public int? GeneralID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=6)]
		public string GeneralName { get; set; }
	}

	public enum MessageGeneralField
	{
		MessageID,
		GeneralID,
		GeneralName,
	}
}
