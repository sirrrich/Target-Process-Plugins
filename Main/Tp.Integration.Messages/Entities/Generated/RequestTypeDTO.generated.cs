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
	public partial interface IRequestTypeDTO : IDataTransferObject
	{
		String Name { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class RequestTypeDTO : DataTransferObject, IRequestTypeDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return RequestTypeID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				RequestTypeID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? RequestTypeID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String Name { get; set; }
	}

	public enum RequestTypeField
	{
		Name,
	}
}