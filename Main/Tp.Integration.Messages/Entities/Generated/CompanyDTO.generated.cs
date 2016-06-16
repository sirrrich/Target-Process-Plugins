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
	public partial interface ICompanyDTO : IDataTransferObject
	{
		String CompanyName { get; set; }
		String CompanyUrl { get; set; }
		string Description { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class CompanyDTO : DataTransferObject, ICompanyDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return CompanyID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				CompanyID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? CompanyID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String CompanyName { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public String CompanyUrl { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public string Description { get; set; }
	}

	public enum CompanyField
	{
		CompanyName,
		CompanyUrl,
		Description,
	}
}
