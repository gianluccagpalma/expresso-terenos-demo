# 🚐 Expresso Terenos — demonstração interativa

**Campo Grande ↔ Terenos · Informação para quem espera, simplicidade para quem dirige.**

Site estático responsivo em português, criado como proposta para apresentar ao motorista e como projeto de portfólio. A ideia é mostrar como passageiros podem consultar a situação de cada van e como o motorista pode atualizar as vagas de forma simples.

> 🧪 Esta é uma demonstração. Vans, vagas e status são simulados. A capacidade de **15 assentos** é apenas um exemplo e precisa ser confirmada.

## 🎯 Objetivo

Facilitar a conversa sobre um futuro serviço para o Expresso Terenos, permitindo experimentar o fluxo antes de desenvolver um sistema completo. A identidade visual usa azul marinho, amarelo e branco e se adapta a celular, tablet e computador.

## 👥 Para o passageiro

- 🚐 Vans individualizadas com seu próprio destino.
- 🟢 Status **Em trajeto** ou **Aguardando passageiro**.
- 💺 Quantidade de vagas e aviso **Lotada** quando chega a zero.
- 🕒 Horário da última atualização simulada.
- 🖼️ Botão de horários que abre a **foto original ampliável**.
- 📍 Informações dos locais de saída e espaço ilustrativo para uma futura rota.

O passageiro não precisa escolher um destino: ele vê o destino informado em cada van.

## 🧑‍✈️ Para o motorista

- Escolha entre uma van, operação habitual, ou duas vans, operação extra.
- Selecione qual van deseja atualizar.
- Defina o destino e o status de cada veículo.
- **Entrou passageiro** reduz uma vaga; **Saiu passageiro** aumenta uma vaga.
- Corrija diretamente a quantidade de vagas livres.
- Os controles respeitam os limites de zero a 15 e rejeitam valores fracionários.
- Recomece o exemplo a qualquer momento.

⚠️ Os controles devem ser operados com a van parada.

## 🚀 Como abrir

Baixe os arquivos mantendo-os juntos e abra **`index.html`** no navegador. Não precisa instalar dependências, executar compilação nem configurar um servidor. Para consultar no celular por um endereço público, publique a pasta no GitHub Pages.

### 📦 Arquivos

| Arquivo | Função |
| --- | --- |
| `index.html` | Conteúdo e estrutura da apresentação |
| `styles.css` | Aparência e adaptação às telas |
| `app.js` | Simulação de vans, vagas, estados e ampliação da foto |
| `horarios.jpeg` | Foto original dos horários fornecida para a proposta |
| `.nojekyll` | Publicação direta no GitHub Pages |

## 🧪 Roteiro para experimentar

1. Veja as vagas da Van 1 na visão do passageiro.
2. No painel do motorista, use **Entrou passageiro** e **Saiu passageiro**.
3. Troque status e destino da van; a visão do passageiro acompanha a alteração.
4. Selecione duas vans para simular operação extra e atualize cada uma separadamente.
5. Corrija as vagas para zero: aparece **Lotada**. Não são aceitos valores fora de 0 a 15 ou fracionários.
6. Use **Ver horários**, amplie a imagem original e feche com o botão ou Escape.

As alterações persistem apenas neste navegador quando o armazenamento local está disponível. Não existe comunicação entre dispositivos. A capacidade de 15 assentos é um exemplo a confirmar.

## 📍 Saídas e trajeto

- Campo Grande: Posto Taurus, sala 1, Rua 26 de Agosto, esquina com a Calógeras.
- Terenos: Estação de Ônibus de Terenos, referência provisória; local exato a confirmar.
- Ida e volta pelo mesmo caminho, ainda sem detalhamento confirmado.
- O espaço de trajeto é ilustrativo. Não há coordenadas, pontos reais inventados nem GPS. O mapa com saídas e pontos de ônibus selecionáveis depende da confirmação da rota com o motorista.

## 🕒 Horários e 💵 pagamento

Os horários permanecem na **imagem original fornecida**, acessível pelo botão **Ver horários**. A demonstração não transcreve nem inventa horários. Confirme a validade da informação com o motorista.

O pagamento acontece **diretamente na van**. Não há checkout, cobrança, QR Pix ou processamento de pagamento.

## 🔎 Dados simulados e limitações

- ❌ Sem backend, autenticação de motorista ou banco de dados remoto.
- ❌ Sem GPS, rastreamento ou posição real das vans.
- ❌ Sem sincronização entre dispositivos ou atualização remota em tempo real.
- ❌ Sem reservas ou garantia de lugar.
- ❌ Sem pagamentos online.
- ✅ Os controles do motorista alteram a visão do passageiro **nesta mesma página**.
- ✅ O navegador guarda o exemplo localmente quando possível. Se o armazenamento estiver indisponível, a simulação continua funcionando enquanto a página estiver aberta.

## 🛣️ Evolução futura

A proposta de implementação futura considera **C# MAUI** para o aplicativo e **ASP.NET Core** para o serviço. Ainda será necessário definir com o motorista capacidade real, vans, saídas, trajeto, pontos de ônibus e regras operacionais. Sincronização remota, autenticação e eventual localização exigiriam desenvolvimento adicional; **não estão implementadas aqui**.

## 🌐 Publicação no GitHub Pages

Publique os arquivos desta pasta na raiz do repositório público `expresso-terenos-demo`. Em **Settings → Pages**, selecione **Deploy from a branch**, branch **main**, pasta **/(root)**. Não há etapa de compilação. O arquivo `.nojekyll` evita processamento Jekyll.

🔗 **Demonstração:** [https://gianluccagpalma.github.io/expresso-terenos-demo/](https://gianluccagpalma.github.io/expresso-terenos-demo/)

💻 **Repositório:** [gianluccagpalma/expresso-terenos-demo](https://github.com/gianluccagpalma/expresso-terenos-demo)

## 🎨 Origem da proposta

A implementação evolui a visualização original de assentos, exportada antes da adaptação para site independente. Foi construída com HTML, CSS e JavaScript, sem bibliotecas externas. A foto original é preservada como material de consulta da proposta.
