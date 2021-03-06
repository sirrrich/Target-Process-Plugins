// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class TestStepCreatedMessage : EntityCreatedMessage<TestStepDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class TestStepDeletedMessage : EntityDeletedMessage<TestStepDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class TestStepUpdatedMessage : EntityUpdatedMessage<TestStepDTO, TestStepField>, ISagaMessage
	{
		
	}

}
