import { ClerkProvider as Clerk } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'antd-style';
import { PropsWithChildren } from 'react';

const ClerkProvider = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Clerk
      appearance={{
        baseTheme: theme.isDarkMode ? dark : undefined,
        variables: {
          colorPrimary: theme.colorPrimary,
        },
      }}
    >
      {children}
    </Clerk>
  );
};

export default ClerkProvider;
