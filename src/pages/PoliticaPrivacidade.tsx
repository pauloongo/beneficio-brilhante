import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PoliticaPrivacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Socio-Guide - Auxílios BR</title>
        <meta name="description" content="Política de Privacidade completa do Socio-Guide. Saiba como coletamos, usamos e protegemos seus dados de acordo com a LGPD." />
        <link rel="canonical" href="https://auxiliosbr.com.br/politica-de-privacidade" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="bg-gradient-to-br from-secondary via-secondary/90 to-primary py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link to="/">
              <Button variant="ghost" className="mb-4 text-white hover:text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">
              Política de Privacidade
            </h1>
            <p className="text-white/90 mt-2">
              Última atualização: 22 de novembro de 2025
            </p>
          </div>
        </div>

        <article className="container mx-auto max-w-4xl py-12 px-4 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              O Socio-Guide (auxiliosbr.com.br) respeita sua privacidade e está comprometido em proteger seus dados pessoais. 
              Esta política descreve como coletamos, usamos, armazenamos e compartilhamos informações pessoais em conformidade 
              com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Informações que Coletamos</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Dados Fornecidos Voluntariamente</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quando você utiliza nossos simuladores ou formulários de contato, podemos coletar:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Informações fornecidas nos simuladores (renda familiar, composição familiar)</li>
              <li>Mensagens enviadas através do formulário de contato</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Dados Coletados Automaticamente</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Endereço IP</li>
              <li>Tipo de navegador e dispositivo</li>
              <li>Páginas visitadas e tempo de permanência</li>
              <li>Referência de origem (como você chegou ao nosso site)</li>
              <li>Cookies e tecnologias similares (veja seção específica)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso de Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos cookies e tecnologias de rastreamento para melhorar sua experiência em nosso site:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site</li>
              <li><strong>Cookies Analíticos:</strong> Para entender como os visitantes interagem com o site</li>
              <li><strong>Cookies de Publicidade:</strong> Para exibir anúncios relevantes através do Google AdSense</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Você pode gerenciar ou desabilitar cookies através das configurações do seu navegador. Note que isso pode 
              afetar algumas funcionalidades do site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Google AdSense e Publicidade</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este site utiliza o Google AdSense para exibir anúncios. O Google pode usar cookies para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Exibir anúncios personalizados com base em visitas anteriores ao nosso site</li>
              <li>Permitir que anunciantes veiculem anúncios relevantes</li>
              <li>Coletar dados agregados sobre visualizações de anúncios</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Você pode optar por não receber anúncios personalizados através das{" "}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Configurações de Anúncios do Google
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Como Usamos Suas Informações</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos seus dados pessoais para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Fornecer e melhorar nossos serviços e simuladores</li>
              <li>Responder suas dúvidas e solicitações de contato</li>
              <li>Enviar informações relevantes sobre benefícios sociais (se você consentir)</li>
              <li>Análise de uso do site para melhorar conteúdo e funcionalidades</li>
              <li>Cumprir obrigações legais</li>
              <li>Prevenir fraudes e proteger a segurança do site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Não vendemos seus dados pessoais. Podemos compartilhar informações com:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Prestadores de Serviços:</strong> Google (Analytics, AdSense), provedores de hospedagem</li>
              <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou ordem judicial</li>
              <li><strong>Parceiros de Publicidade:</strong> Dados anonimizados para fins de análise de anúncios</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Seus Direitos (LGPD)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Acesso:</strong> Confirmar se processamos seus dados e solicitar cópia</li>
              <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li><strong>Exclusão:</strong> Solicitar a eliminação de dados pessoais</li>
              <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
              <li><strong>Revogação de Consentimento:</strong> Retirar consentimento a qualquer momento</li>
              <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em certas situações</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Para exercer seus direitos, entre em contato através do e-mail: <strong>contato@auxiliosbr.com.br</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Segurança dos Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não 
              autorizado, perda, destruição ou alteração. Isso inclui criptografia SSL, firewalls, controles de acesso 
              e monitoramento contínuo de segurança.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Retenção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política 
              ou conforme exigido por lei. Dados de simuladores são anonimizados após o uso imediato.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Menores de Idade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nosso site não coleta intencionalmente dados de menores de 18 anos. Se você é pai/mãe ou responsável legal 
              e acredita que coletamos dados de um menor, entre em contato conosco imediatamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Links Externos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nosso site pode conter links para sites de terceiros (gov.br, INSS, etc.). Não somos responsáveis pelas 
              práticas de privacidade desses sites. Recomendamos ler as políticas de privacidade de cada site visitado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta política periodicamente. A data da última atualização será sempre exibida no topo. 
              Alterações substanciais serão comunicadas através de aviso em destaque no site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Encarregado de Dados (DPO)</h2>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-muted-foreground mb-2">
                <strong>Nome:</strong> Equipe Socio-Guide
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>E-mail:</strong> dpo@auxiliosbr.com.br
              </p>
              <p className="text-muted-foreground">
                <strong>Endereço:</strong> Brasil
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato:
            </p>
            <div className="bg-primary/5 p-6 rounded-lg mt-4">
              <p className="text-muted-foreground mb-2">
                <strong>E-mail:</strong> contato@auxiliosbr.com.br
              </p>
              <p className="text-muted-foreground">
                <strong>Formulário de Contato:</strong>{" "}
                <Link to="/contato" className="text-primary hover:underline">
                  auxiliosbr.com.br/contato
                </Link>
              </p>
            </div>
          </section>

          <div className="border-t pt-8 mt-12">
            <p className="text-center text-sm text-muted-foreground">
              Ao usar nosso site, você concorda com esta Política de Privacidade.
            </p>
          </div>
        </article>
      </main>
    </>
  );
};

export default PoliticaPrivacidade;