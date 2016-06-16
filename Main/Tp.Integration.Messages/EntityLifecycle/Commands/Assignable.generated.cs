// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateAssignableCommand : CreateEntityCommand<AssignableDTO>
	{
		public CreateAssignableCommand(AssignableDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateAssignableCommand : UpdateEntityCommand<AssignableDTO>
	{
		public UpdateAssignableCommand(AssignableDTO dto) : base(dto)
		{
		}

		public UpdateAssignableCommand(AssignableDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteAssignableCommand : DeleteEntityCommand<AssignableDTO>
	{
		public DeleteAssignableCommand(int id) : base(id)
		{
		}
	}

}
