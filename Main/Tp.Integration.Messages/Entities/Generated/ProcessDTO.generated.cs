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
	public partial interface IProcessDTO : IDataTransferObject
	{
		String Name { get; set; }
		Boolean? IsDefault { get; set; }
		string Description { get; set; }
		string UnitAbbreviation { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class ProcessDTO : DataTransferObject, IProcessDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return ProcessID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				ProcessID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? ProcessID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String Name { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public Boolean? IsDefault { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public string Description { get; set; }

		
		[DataMember]
		[XmlElement(Order=7)]
		public string UnitAbbreviation { get; set; }
	}

	public enum ProcessField
	{
		Name,
		IsDefault,
		Description,
		UnitAbbreviation,
	}
}
