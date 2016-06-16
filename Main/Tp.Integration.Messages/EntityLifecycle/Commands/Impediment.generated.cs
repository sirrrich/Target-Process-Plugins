// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateImpedimentCommand : CreateEntityCommand<ImpedimentDTO>
	{
		public CreateImpedimentCommand(ImpedimentDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateImpedimentCommand : UpdateEntityCommand<ImpedimentDTO>
	{
		public UpdateImpedimentCommand(ImpedimentDTO dto) : base(dto)
		{
		}

		public UpdateImpedimentCommand(ImpedimentDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteImpedimentCommand : DeleteEntityCommand<ImpedimentDTO>
	{
		public DeleteImpedimentCommand(int id) : base(id)
		{
		}
	}

}
