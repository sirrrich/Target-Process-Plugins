// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class TestItemTestPlanLinkCreatedMessage : EntityCreatedMessage<TestItemTestPlanLinkDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class TestItemTestPlanLinkDeletedMessage : EntityDeletedMessage<TestItemTestPlanLinkDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class TestItemTestPlanLinkUpdatedMessage : EntityUpdatedMessage<TestItemTestPlanLinkDTO, TestItemTestPlanLinkField>, ISagaMessage
	{
		
	}

}
