// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateMilestoneCommand : CreateEntityCommand<MilestoneDTO>
	{
		public CreateMilestoneCommand(MilestoneDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateMilestoneCommand : UpdateEntityCommand<MilestoneDTO>
	{
		public UpdateMilestoneCommand(MilestoneDTO dto) : base(dto)
		{
		}

		public UpdateMilestoneCommand(MilestoneDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteMilestoneCommand : DeleteEntityCommand<MilestoneDTO>
	{
		public DeleteMilestoneCommand(int id) : base(id)
		{
		}
	}

}