import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { ThorswapContractFactory } from '../contracts';
import { THORSWAP_DEFINITION } from '../thorswap.definition';

const appId = THORSWAP_DEFINITION.id;
const groupId = THORSWAP_DEFINITION.groups.vthor.id;
const network = Network.ETHEREUM_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class EthereumThorswapThorTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(ThorswapContractFactory) private readonly thorswapContractFactory: ThorswapContractFactory,
  ) {}

  async getPositions() {
    return [];
  }
}
