// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateRoleEntityTypeCommand : CreateEntityCommand<RoleEntityTypeDTO>
	{
		public CreateRoleEntityTypeCommand(RoleEntityTypeDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateRoleEntityTypeCommand : UpdateEntityCommand<RoleEntityTypeDTO>
	{
		public UpdateRoleEntityTypeCommand(RoleEntityTypeDTO dto) : base(dto)
		{
		}

		public UpdateRoleEntityTypeCommand(RoleEntityTypeDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteRoleEntityTypeCommand : DeleteEntityCommand<RoleEntityTypeDTO>
	{
		public DeleteRoleEntityTypeCommand(int id) : base(id)
		{
		}
	}

}
