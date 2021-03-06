// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateGeneralFollowerCommand : CreateEntityCommand<GeneralFollowerDTO>
	{
		public CreateGeneralFollowerCommand(GeneralFollowerDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateGeneralFollowerCommand : UpdateEntityCommand<GeneralFollowerDTO>
	{
		public UpdateGeneralFollowerCommand(GeneralFollowerDTO dto) : base(dto)
		{
		}

		public UpdateGeneralFollowerCommand(GeneralFollowerDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteGeneralFollowerCommand : DeleteEntityCommand<GeneralFollowerDTO>
	{
		public DeleteGeneralFollowerCommand(int id) : base(id)
		{
		}
	}

}
