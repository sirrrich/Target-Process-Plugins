// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateClientStorageCommand : CreateEntityCommand<ClientStorageDTO>
	{
		public CreateClientStorageCommand(ClientStorageDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateClientStorageCommand : UpdateEntityCommand<ClientStorageDTO>
	{
		public UpdateClientStorageCommand(ClientStorageDTO dto) : base(dto)
		{
		}

		public UpdateClientStorageCommand(ClientStorageDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteClientStorageCommand : DeleteEntityCommand<ClientStorageDTO>
	{
		public DeleteClientStorageCommand(int id) : base(id)
		{
		}
	}

}
