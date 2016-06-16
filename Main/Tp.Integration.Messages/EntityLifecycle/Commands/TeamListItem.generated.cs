// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateTeamListItemCommand : CreateEntityCommand<TeamListItemDTO>
	{
		public CreateTeamListItemCommand(TeamListItemDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateTeamListItemCommand : UpdateEntityCommand<TeamListItemDTO>
	{
		public UpdateTeamListItemCommand(TeamListItemDTO dto) : base(dto)
		{
		}

		public UpdateTeamListItemCommand(TeamListItemDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteTeamListItemCommand : DeleteEntityCommand<TeamListItemDTO>
	{
		public DeleteTeamListItemCommand(int id) : base(id)
		{
		}
	}

}
