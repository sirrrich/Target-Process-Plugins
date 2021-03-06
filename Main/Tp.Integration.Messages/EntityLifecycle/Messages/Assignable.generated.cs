// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class AssignableCreatedMessage : EntityCreatedMessage<AssignableDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class AssignableDeletedMessage : EntityDeletedMessage<AssignableDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class AssignableUpdatedMessage : EntityUpdatedMessage<AssignableDTO, AssignableField>, ISagaMessage
	{
		
	}

}
