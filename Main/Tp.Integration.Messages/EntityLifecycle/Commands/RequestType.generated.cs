// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateRequestTypeCommand : CreateEntityCommand<RequestTypeDTO>
	{
		public CreateRequestTypeCommand(RequestTypeDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateRequestTypeCommand : UpdateEntityCommand<RequestTypeDTO>
	{
		public UpdateRequestTypeCommand(RequestTypeDTO dto) : base(dto)
		{
		}

		public UpdateRequestTypeCommand(RequestTypeDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteRequestTypeCommand : DeleteEntityCommand<RequestTypeDTO>
	{
		public DeleteRequestTypeCommand(int id) : base(id)
		{
		}
	}

}
