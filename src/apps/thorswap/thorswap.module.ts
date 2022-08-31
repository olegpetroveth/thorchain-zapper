import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';

import { ThorswapContractFactory } from './contracts';
import { EthereumThorswapBalanceFetcher } from './ethereum/thorswap.balance-fetcher';
import { EthereumThorswapThorTokenFetcher } from './ethereum/thorswap.thor.token-fetcher';
import { ThorswapAppDefinition, THORSWAP_DEFINITION } from './thorswap.definition';

@Register.AppModule({
  appId: THORSWAP_DEFINITION.id,
  providers: [
    EthereumThorswapBalanceFetcher,
    EthereumThorswapThorTokenFetcher,
    ThorswapAppDefinition,
    ThorswapContractFactory,
  ],
})
export class ThorswapAppModule extends AbstractApp() {}
