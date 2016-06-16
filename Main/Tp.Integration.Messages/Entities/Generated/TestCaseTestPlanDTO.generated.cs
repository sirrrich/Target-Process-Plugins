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
	public partial interface ITestCaseTestPlanDTO : IDataTransferObject
	{
		Double? NumericPriority { get; set; }
		int? TestPlanID { get; set; }
		string TestPlanName { get; set; }
		int? TestCaseID { get; set; }
		string TestCaseName { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class TestCaseTestPlanDTO : DataTransferObject, ITestCaseTestPlanDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return TestCaseTestPlanID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				TestCaseTestPlanID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? TestCaseTestPlanID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=4)]
		public int? TestPlanID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=5)]
		public int? TestCaseID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=6)]
		public string TestPlanName { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=7)]
		public string TestCaseName { get; set; }

		
		[DataMember]
		[XmlElement(Order=8)]
		public Double? NumericPriority { get; set; }
	}

	public enum TestCaseTestPlanField
	{
		TestPlanID,
		TestCaseID,
		TestPlanName,
		TestCaseName,
		NumericPriority,
	}
}