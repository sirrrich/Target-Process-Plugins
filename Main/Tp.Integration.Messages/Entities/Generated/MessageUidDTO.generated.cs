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
	public partial interface IMessageUidDTO : IDataTransferObject
	{
		String UID { get; set; }
		String MailServer { get; set; }
		String MailLogin { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class MessageUidDTO : DataTransferObject, IMessageUidDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return MessageUidID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				MessageUidID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? MessageUidID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String UID { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public String MailServer { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public String MailLogin { get; set; }
	}

	public enum MessageUidField
	{
		UID,
		MailServer,
		MailLogin,
	}
}
