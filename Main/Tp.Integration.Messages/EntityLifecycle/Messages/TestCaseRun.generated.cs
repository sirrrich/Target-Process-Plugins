// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class TestCaseRunCreatedMessage : EntityCreatedMessage<TestCaseRunDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class TestCaseRunDeletedMessage : EntityDeletedMessage<TestCaseRunDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class TestCaseRunUpdatedMessage : EntityUpdatedMessage<TestCaseRunDTO, TestCaseRunField>, ISagaMessage
	{
		
	}

}
