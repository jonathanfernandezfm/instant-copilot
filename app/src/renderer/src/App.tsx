import './App.css';
import { useChat } from 'ai/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/renderer/src/components/ui/card';
import { Badge } from '@/renderer/src/components/ui/badge';
import { cn } from '@/renderer/src/lib/utils';
import { LoadingIcon } from '@/renderer/src/components/icons/loading-icon';
import { Button } from '@/renderer/src/components/ui/button';
import { Input } from '@/renderer/src/components/ui/input';
import { ThemeProvider } from '@/renderer/src/providers/theme-provider';
import { MessageCircle, Send, Trash, WandSparkles } from 'lucide-react';

function App() {
  const { messages, input, handleInputChange, handleSubmit, setMessages, isLoading } = useChat({
    api: 'http://localhost:3000/generate',
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full p-6">
        <div className="flex w-full gap-4 mb-4">
          <Card className="flex-1 cursor-pointer hover:bg-neutral-900">
            <CardTitle className="p-4 mx-auto text-center">
              <div className="flex flex-col items-center justify-center gap-2 font-medium">
                <MessageCircle size={16} />
                Chat
              </div>
            </CardTitle>
          </Card>
          <Card className="flex-1 cursor-pointer hover:bg-neutral-900">
            <CardTitle className="p-4 mx-auto text-center">
              <div className="flex flex-col items-center justify-center gap-2 font-medium">
                <WandSparkles size={16} />
                Enhancer
              </div>
            </CardTitle>
          </Card>
        </div>
        <div className="flex flex-col mb-24 space-y-4">
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              <Card>
                <CardHeader className="p-4 pb-0">
                  <Badge className={cn('w-fit', m.role !== 'user' && 'bg-blue-300')}>{m.role === 'user' ? 'User' : 'AI'}</Badge>
                </CardHeader>
                <CardContent className="p-4 pt-2">{m.content}</CardContent>
              </Card>
            </div>
          ))}
          {isLoading && (
            <div className="mx-auto w-fit">
              <LoadingIcon />
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="fixed bottom-8 box-border w-[calc(100%-48px)]">
          <div className="flex space-x-2 text-center">
            <Input className="flex-1 p-2 rounded bg-background" value={input} placeholder="Say something..." onChange={handleInputChange} />
            <Button type="submit" variant="secondary" size="icon" asChild>
              <div>
                <Send size={16} />
              </div>
            </Button>
            <Button type="button" variant="ghost" size="icon" asChild onClick={() => setMessages([])}>
              <div>
                <Trash size={16} />
              </div>
            </Button>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default App;
