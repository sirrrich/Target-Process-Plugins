// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class ProcessPracticeCreatedMessage : EntityCreatedMessage<ProcessPracticeDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class ProcessPracticeDeletedMessage : EntityDeletedMessage<ProcessPracticeDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class ProcessPracticeUpdatedMessage : EntityUpdatedMessage<ProcessPracticeDTO, ProcessPracticeField>, ISagaMessage
	{
		
	}

}
