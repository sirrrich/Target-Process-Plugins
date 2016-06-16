// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateFeatureCommand : CreateEntityCommand<FeatureDTO>
	{
		public CreateFeatureCommand(FeatureDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateFeatureCommand : UpdateEntityCommand<FeatureDTO>
	{
		public UpdateFeatureCommand(FeatureDTO dto) : base(dto)
		{
		}

		public UpdateFeatureCommand(FeatureDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteFeatureCommand : DeleteEntityCommand<FeatureDTO>
	{
		public DeleteFeatureCommand(int id) : base(id)
		{
		}
	}

}