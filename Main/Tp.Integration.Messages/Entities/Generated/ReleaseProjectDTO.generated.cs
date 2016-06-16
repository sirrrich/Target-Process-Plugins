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
	public partial interface IReleaseProjectDTO : IDataTransferObject
	{
		int? ReleaseID { get; set; }
		string ReleaseName { get; set; }
		int? ProjectID { get; set; }
		string ProjectName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class ReleaseProjectDTO : DataTransferObject, IReleaseProjectDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return ReleaseProjectID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				ReleaseProjectID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=1)]
		public Int32? ReleaseProjectID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=2)]
		public int? ProjectID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=3)]
		public int? ReleaseID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=4)]
		public string ProjectName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=5)]
		public string ReleaseName { get; set; }
	}

	public enum ReleaseProjectField
	{
		ProjectID,
		ReleaseID,
		ProjectName,
		ReleaseName,
	}
}
