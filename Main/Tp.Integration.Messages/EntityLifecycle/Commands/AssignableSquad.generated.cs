// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateAssignableSquadCommand : CreateEntityCommand<AssignableSquadDTO>
	{
		public CreateAssignableSquadCommand(AssignableSquadDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateAssignableSquadCommand : UpdateEntityCommand<AssignableSquadDTO>
	{
		public UpdateAssignableSquadCommand(AssignableSquadDTO dto) : base(dto)
		{
		}

		public UpdateAssignableSquadCommand(AssignableSquadDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteAssignableSquadCommand : DeleteEntityCommand<AssignableSquadDTO>
	{
		public DeleteAssignableSquadCommand(int id) : base(id)
		{
		}
	}

}
