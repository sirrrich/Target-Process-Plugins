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
	public partial interface IPasswordRecoveryDTO : IDataTransferObject
	{
		String ActivationKey { get; set; }
		DateTime? ActivateDate { get; set; }
		int? UserID { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class PasswordRecoveryDTO : DataTransferObject, IPasswordRecoveryDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return PasswordRecoveryID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				PasswordRecoveryID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? PasswordRecoveryID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String ActivationKey { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public DateTime? ActivateDate { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=6)]
		public int? UserID { get; set; }
	}

	public enum PasswordRecoveryField
	{
		ActivationKey,
		ActivateDate,
		UserID,
	}
}