import { Meta } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs/Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>

export const TabsDefault = () => (
  <Tabs style={{ width: '400px' }}>
    <TabsList>
      <TabsTrigger value="tab1">Switcher</TabsTrigger>
      <TabsTrigger value="tab2">Switcher</TabsTrigger>
      <TabsTrigger value="tab3">Switcher</TabsTrigger>
      <TabsTrigger value="tab4">Switcher</TabsTrigger>
    </TabsList>
    {/*<TabsContent value="account">Make changes to your account here.</TabsContent>*/}
    {/*<TabsContent value="password">Change your password here.</TabsContent>*/}
    {/*<TabsContent value="info">Change your info here.</TabsContent>*/}
  </Tabs>
)

export const TabsWithDisabledTab = () => (
  <Tabs style={{ width: '400px' }}>
    <TabsList>
      <TabsTrigger value="tab1">Switcher</TabsTrigger>
      <TabsTrigger disabled value="tab2">
        Switcher
      </TabsTrigger>
      <TabsTrigger value="tab3">Switcher</TabsTrigger>
      <TabsTrigger value="tab4">Switcher</TabsTrigger>
    </TabsList>
    {/*<TabsContent value="tab1">Make changes here.</TabsContent>*/}
    {/*<TabsContent value="tab2">Make changes here.</TabsContent>*/}
    {/*<TabsContent value="tab3">Make changes here.</TabsContent>*/}
    {/*<TabsContent value="tab4">Make changes here.</TabsContent>*/}
  </Tabs>
)
