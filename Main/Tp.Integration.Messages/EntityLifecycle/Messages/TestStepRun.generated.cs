// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class TestStepRunCreatedMessage : EntityCreatedMessage<TestStepRunDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class TestStepRunDeletedMessage : EntityDeletedMessage<TestStepRunDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class TestStepRunUpdatedMessage : EntityUpdatedMessage<TestStepRunDTO, TestStepRunField>, ISagaMessage
	{
		
	}

}
