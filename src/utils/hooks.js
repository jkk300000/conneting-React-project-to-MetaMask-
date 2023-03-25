import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useState } from "react";
import { injected } from "./connectors";

export function useWeb3Connect() {
    const { activate, active } = useWeb3React();
    const [tried, setTried] = useState(false);

    const tryActivate = useCallback(() => {
        async function _tryActivate() {
            const isAuthorized = await injected.isAuthorized();
            
            if (isAuthorized) {
                try {
                    await activate(injected, undefined, true);
                } catch (error) {
                    window.alert('Error: ' + (error && error.message));
                }
            }
            setTried(true);
        }
        _tryActivate()
        
    }, [activate])

    useEffect(() => {
        tryActivate();
    }, [tryActivate]);

    useEffect(() => {
        if (!tried && active) {
            setTried(true);
        }
    }, [tried, active]);

    return tried;
}

export function useInactiveListener(suppress = false) {
    const { active, error, activate } = useWeb3React()

    useEffect(() => {
        const { ethereum } = window;

        if (ethereum && ethereum.on && !active && !error && !suppress) {
            const handleConnect = () => {
                console.log('handle connect')
                activate(injected);

            }

            const handleChainChanged = (chainId) => {
                console.log('handleChainChanged', chainId)
                activate(injected);

            }

            const handleAccountsChanged = (accounts) => {
                console.log('handleAccountsChanged', accounts)
                if (accounts.length > 0) {
                    activate(injected);
                }
                
            }

    
            ethereum.on('connect', handleConnect);
            ethereum.on('chainChanged', handleChainChanged);
            ethereum.on('accountsChanged', handleAccountsChanged);
        
            return () => {
                if (ethereum.removeListner) {
                    ethereum.removeListner('connenct', handleConnect)
                    ethereum.removeListner('chainChanged', handleChainChanged)
                    ethereum.removeListner('accountsChanged', handleAccountsChanged )
                }
            }
        
        }
    }, [active, error, suppress, activate])
}