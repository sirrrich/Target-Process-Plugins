// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class UserCreatedMessage : EntityCreatedMessage<UserDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class UserDeletedMessage : EntityDeletedMessage<UserDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class UserUpdatedMessage : EntityUpdatedMessage<UserDTO, UserField>, ISagaMessage
	{
		
	}

}
