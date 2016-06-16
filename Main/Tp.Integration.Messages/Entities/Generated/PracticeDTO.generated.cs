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
	public partial interface IPracticeDTO : IDataTransferObject
	{
		String Name { get; set; }
		String Description { get; set; }
		Boolean? AlwaysOn { get; set; }
		String DisplayName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class PracticeDTO : DataTransferObject, IPracticeDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return PracticeID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				PracticeID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? PracticeID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String Name { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public String Description { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public Boolean? AlwaysOn { get; set; }

		
		[DataMember]
		[XmlElement(Order=7)]
		public String DisplayName { get; set; }
	}

	public enum PracticeField
	{
		Name,
		Description,
		AlwaysOn,
		DisplayName,
	}
}
