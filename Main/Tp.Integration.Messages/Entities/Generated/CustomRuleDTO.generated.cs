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
	public partial interface ICustomRuleDTO : IDataTransferObject
	{
		String Name { get; set; }
		String CustomRuleKind { get; set; }
		string Description { get; set; }
		Boolean? IsEnabled { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class CustomRuleDTO : DataTransferObject, ICustomRuleDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return CustomRuleID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				CustomRuleID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=1)]
		public Int32? CustomRuleID { get; set; }

		
		[DataMember]
		[XmlElement(Order=2)]
		public String Name { get; set; }

		
		[DataMember]
		[XmlElement(Order=3)]
		public String CustomRuleKind { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public string Description { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public Boolean? IsEnabled { get; set; }
	}

	public enum CustomRuleField
	{
		Name,
		CustomRuleKind,
		Description,
		IsEnabled,
	}
}