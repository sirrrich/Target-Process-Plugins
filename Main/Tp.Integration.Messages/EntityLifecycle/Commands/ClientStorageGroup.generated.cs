// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateClientStorageGroupCommand : CreateEntityCommand<ClientStorageGroupDTO>
	{
		public CreateClientStorageGroupCommand(ClientStorageGroupDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateClientStorageGroupCommand : UpdateEntityCommand<ClientStorageGroupDTO>
	{
		public UpdateClientStorageGroupCommand(ClientStorageGroupDTO dto) : base(dto)
		{
		}

		public UpdateClientStorageGroupCommand(ClientStorageGroupDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteClientStorageGroupCommand : DeleteEntityCommand<ClientStorageGroupDTO>
	{
		public DeleteClientStorageGroupCommand(int id) : base(id)
		{
		}
	}

}
