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
	public partial interface IApplicationContextDataDTO : IDataTransferObject
	{
		String Hash { get; set; }
		String Data { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class ApplicationContextDataDTO : DataTransferObject, IApplicationContextDataDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return ApplicationContextDataID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				ApplicationContextDataID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? ApplicationContextDataID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String Hash { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public String Data { get; set; }
	}

	public enum ApplicationContextDataField
	{
		Hash,
		Data,
	}
}
