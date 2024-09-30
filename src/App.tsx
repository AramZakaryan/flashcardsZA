import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function App() {
  return (
    <>
      <div>Hello</div>

      <div>
        <Tabs defaultValue="" style={{ width: '400px' }}>
          <TabsList>
            <TabsTrigger value="tab1">Switcher</TabsTrigger>
            <TabsTrigger disabled value="tab2">
              Switcher
            </TabsTrigger>
            <TabsTrigger value="tab3">Switcher</TabsTrigger>
            <TabsTrigger value="tab4">Switcher</TabsTrigger>
          </TabsList>
          {/*<TabsContent value="account">Make changes to your account here.</TabsContent>*/}
          {/*<TabsContent value="password">Change your password here.</TabsContent>*/}
          {/*<TabsContent value="info">Change your info here.</TabsContent>*/}
        </Tabs>
      </div>
    </>
  )
}
