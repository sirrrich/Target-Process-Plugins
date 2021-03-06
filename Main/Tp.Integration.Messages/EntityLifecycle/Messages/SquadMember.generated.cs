// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class SquadMemberCreatedMessage : EntityCreatedMessage<SquadMemberDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class SquadMemberDeletedMessage : EntityDeletedMessage<SquadMemberDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class SquadMemberUpdatedMessage : EntityUpdatedMessage<SquadMemberDTO, SquadMemberField>, ISagaMessage
	{
		
	}

}
