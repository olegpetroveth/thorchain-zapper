import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ContractFactory } from '~contract/contracts';
import { Network } from '~types/network.interface';

import { Thor__factory } from './ethers';
import { VThor__factory } from './ethers';

// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class ThorswapContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  thor({ address, network }: ContractOpts) {
    return Thor__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  vThor({ address, network }: ContractOpts) {
    return VThor__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { Thor } from './ethers';
export type { VThor } from './ethers';
